import SidebarNoteItem from '@/components/SidebarNoteItem';
// SidebarNoteList(RSC SEO) -> 拆出来 SidebarNoteItem(交互 CSR)
export default async function SidebarNoteList({ notes }) {
  const arr = Object.entries(notes); // hash 转成二维数组 方便map 组件
  if (arr.length == 0) {
    return <div className="notes-empty">
      No Notes created yet!
    </div>
  }
  return (<ul className="notes-list">
    {
      arr.map(([noteID, note]) => {
        return (
          <li key={noteID}>
            <SidebarNoteItem noteID={noteID} note={JSON.parse(note)} />
          </li>
        )
      })
    }

  </ul>)
}