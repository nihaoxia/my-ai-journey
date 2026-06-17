const tree = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D',
      left: null,
      right: null
    },
    right: {
      val: 'E',
      left: null,
      right: null
    }
  },
  right: {
    val: 'C',
    left: {
      val: 'f',
      left: null,
      right: null
    },
    right: {
      val: 'G',
      left: null,
      right: null
    }
  }
}
// 前序遍历
function preorder(root) {
  // 退出条件
  if (!root) {
    return
  }
  console.log(`当前遍历节点值是：`, root.val)//根节点先
  preorder(root.left)
  preorder(root.right)
}


// 中序遍历
function inorder(root) {
  // 退出条件
  if (!root) {
    return
  }
  preorder(root.left)
  console.log(`当前遍历节点值是：`, root.val)//左节点先
  preorder(root.right)
}
// preorder(tree)
console.log('-------------------------------------')
inorder(tree)
