import React from 'react'
// @ts-ignore
import { AutoComplete } from 'react-liyueUI'
import { DataSourceType } from '@/auto-complete/autoComplete';


interface  GithubUserProps {
  login: string
  url: string
  avatar_url: string
}

export default ()=> {
  const renderOption = (item: DataSourceType) => {
    const itemWithGithub = item as DataSourceType<GithubUserProps>
    return (
      <>
        <b> Name: {itemWithGithub.value}</b>
        <span> url:{itemWithGithub.url}</span>
       </>
    )
  }
  const handleSearch = (query: string) =>
    fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res=> res.json())
      .then(({ items }) => {
          if(typeof items !== 'undefined') {
            return items.slice(0,10).map((item:any) => ({ value:item.login,...item}))
          }
          return []
  })
  return (
    <div>
      <div>请输入Github用户名</div>
        <AutoComplete onSearch={handleSearch} renderOption={renderOption} />
    </div>
  )

}
