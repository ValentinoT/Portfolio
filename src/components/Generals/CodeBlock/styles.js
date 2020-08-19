import styled from 'styled-components'

export const Pre = styled.pre`
  font-family: 'Fira Code', monospace;
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow-x: scroll;
  border-radius: 5px;
  line-height: 1.5;
  font-size: 14px;
  margin: 20px 0;
`

export const Line = styled.div`
  display: table-row;
  font-family: 'Fira Code',monospace;
`

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
  font-family: 'Fira Code',monospace;
`

export const LineContent = styled.span`
  display: table-cell;
  font-family: 'Fira Code',monospace;
  && span{
    font-family: 'Fira Code',monospace;
  }
`
