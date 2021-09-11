import React, { ChangeEvent, FC, ReactElement, useEffect, useRef, useState } from 'react';
import classNames from 'classnames'
import { LoadingOutlined } from '@ant-design/icons'
import Transition from '../transition'
import Input, { InputProps } from '../input/input'
import useClickOutside from '@/hooks/useClickOutside';

import useDebounce from '@/hooks/useDebounce';



interface DataSourceObject {
  value: string
}

export type DataSourceType<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  /** 搜索补全项的时候调用 */
  onSearch: (str: string) => DataSourceType[] | Promise<DataSourceType[]>
  /** 选中下拉选项时触发的回调 */
  onSelect?: (item: DataSourceType) => void
  /** 自定义渲染下拉选项，返回 ReactElement */
  renderOption?: (item: DataSourceType) => ReactElement
}

const AutoComplete: FC<AutoCompleteProps> = ({
                                               value = '',
                                               onSearch,
                                               onSelect,
                                               renderOption,
                                               ...restProps
                                             }) => {
  const [inputValue, setInputValue] = useState(value as string)
  const [showDropdown, setShowDropdown] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [options, setOptions] = useState<DataSourceType[]>([])
  const [highlightIndex, setHighlightIndex] = useState(-1)
  const triggerSearch = useRef(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const debouncedValue = useDebounce(inputValue, 300)

  // 当点击到AutoComplete组件外的区域，会自动关闭下拉框选项部分
  useClickOutside(dropdownRef, () => {
    setOptions([])
    setShowDropdown(false)
  })

  useEffect(() => {
    /*
    Q: 为什么需要triggerSearch？
    A: 不用triggerSearch的话，这里options选项组的改变只依赖于debouncedValue,
    debouncedValue是通过inputValue经防抖函数计算得到的，delay时长500ms
    这里会有个问题：如果用户选择了某一下拉选项，这时选项值会回填到input中，debounceValue会改变，options也会改变，下拉框将一直存在
    我们所希望的是，当用户选择某一项后，下拉框隐藏，options也不必再重新计算。triggerSearch.current就可以当做是用于判断的变量
    在input的onChange事件触发时，triggerSearch.current设为true，在下拉框的li的handleSelect事件触发时，设为false
    */
    if (debouncedValue && triggerSearch.current) {
      setOptions([])
      const result = onSearch(debouncedValue)
      if (result instanceof Promise) {
        setIsLoading(true)
        result.then(data => {
          setIsLoading(false)
          setOptions(data)
          if (data.length > 0) {
            setShowDropdown(true)
          }
        })
      } else {
        setOptions(result)
        if (result.length > 0) {
          setShowDropdown(true)
        }
      }
    } else {
      setShowDropdown(false)
    }
    setHighlightIndex(-1)
  }, [debouncedValue, onSearch])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.trim()
    setInputValue(newValue)
    triggerSearch.current = true
  }

  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value)
    setShowDropdown(false)
    if (onSelect) {
      onSelect(item)
    }
    triggerSearch.current = false
  }

  // eslint-disable-next-line no-confusing-arrow
  const renderTemplate = (item: DataSourceType) =>
    renderOption ? renderOption(item) : item.value

  const highlight = (index: number) => {
    let currentIndex = index
    if (index < 0) currentIndex = 0
    if (index >= options.length) {
      currentIndex = options.length - 1
    }
    setHighlightIndex(currentIndex)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      // 回车
      case 'Enter':
        if (options[highlightIndex]) {
          handleSelect(options[highlightIndex])
        }
        break
      // 上
      case 'ArrowUp':
        highlight(highlightIndex - 1)
        break
      // 下
      case 'ArrowDown':
        highlight(highlightIndex + 1)
        break
      // ESC
      case 'Escape':
        setShowDropdown(false)
        break
      default:
        break
    }
  }
  const generateDropdown = () => (
    <Transition in={showDropdown || isLoading} animation="zoom-in-top" timeout={300}>
      <ul className="mk-suggestion-list">
        {isLoading && (
          <div className="suggestion-loading-icon">
            <LoadingOutlined />
          </div>
        )}
        {options.map((item, index) => {
          const classes = classNames('suggestion-item', {
            'is-active': index === highlightIndex, // 结合highlightIndex，做高亮处理
          })
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index} className={classes} onClick={() => handleSelect(item)}>
              {renderTemplate(item)}
            </li>
          )
        })}
      </ul>
    </Transition>
  )

  return (
    <div className="mk-auto-complete" ref={dropdownRef}>
      <Input
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...restProps}
      />
      {generateDropdown()}
    </div>
  )
}
export default AutoComplete
