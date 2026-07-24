import {
  useState
} from 'react';
//重的 耗时
function heavyComputation() {
  console.log('开始执行 heavyComputation...');
  const startTime = performance.now();
  // 网页性能优化指标  performance 性能表现 api
  const result = [];
  for (let i = 0; i < 100; i++) {
    result.push({ id: i, name: `用户${i}` });
  }
  const duration = performance.now() - startTime;
  console.log(duration);
  return result;
}

function App() {
  // const [users] = useState([
  //   { id: 1, name: '陈俊璋' },
  //   { id: 2, name: '胡适' },
  // ])
  // 状态的初始值不是直接给的 可能要经过一个计算
  // useState (函数)
  //const [users] = useState(heavyComputation());
  const [users] = useState(() => heavyComputation());
  const [filterText, setFilterText] = useState('');
  // 数据状态 state props computed 计算属性
  const filteredUsers = users.filter(user =>
    user.name.includes(filterText)
  )
  return (
    <div style={{ padding: '20px' }}>
      <h2>用户列表</h2>
      <input
        type="text"
        placeholder="输入用户名过滤"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <p>当前显示 {filteredUsers.length} 个用户 </p>
      <ul style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {
          filteredUsers.map(user => (
            <li key={user.id}>{user.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App