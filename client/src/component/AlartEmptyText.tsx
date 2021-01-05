import React from 'react'

type AlartEmptyTextProps = {
  isTextEmpty: boolean,
  item: string,
}
const AlartEmptyText: React.FC<AlartEmptyTextProps> = (props) => {
  return(
    <React.Fragment>
      {(() => {
        if (props.isTextEmpty) {
        return <span>{props.item}が入力されていません</span>
        }
      })()}
    </React.Fragment>
  )
}

export default AlartEmptyText