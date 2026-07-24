

function partition(nums, left, right) {
  let i = left, j = right; //左右指针
  //检查一遍数组
  while (i < j) {
    // 把第一项作为基准值   
    // 不开销新的空间 原地排序
    while (i < j && nums[j] >= nums[left]) {
      // 右侧比基准值大的，放到右边的数组
      j--;
    }
    while (i < j && nums[i] <= nums[left]) {
      i++;//退出的时候找到了第一个大于基准值的元素
    }
    // 交换
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  // 交换基准值和i指向的元素
  [nums[i], nums[left]] = [nums[left], nums[i]];
  return i;
}
function quickSort(nums, left, right) {

}