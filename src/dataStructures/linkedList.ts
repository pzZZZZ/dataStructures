/**
 * 实例化节点类
 * @param element 传入节点
 * @param next 下一个节点地址 默认为空
 * @class Node
 */
class Node {
  element: Object;
  next: any;
  constructor(ele: any) {
    this.element = ele;
    this.next = null;
  }
}
interface element {
  next: any;
  element: any;
}
class linkedList {
  length: number;
  head: element;
  constructor() {
    this.length = 0;
    this.head = new Node('head'); //表头节点
  }
  /**
   * 查找元素功能 找不到时直接返回链尾节点
   *
   * @param {*} [item='']
   * @returns
   *
   * @memberOf linkedList
   */
  find(item: any = ''): element {
    let cur = this.head;
    while (cur.element != item && cur.next) {
      //当前节点不等于要找的元素时并且当前节点的下一个指针存在时
      cur = cur.next;
    }
    return cur;
  }
  /**
   * @method insert 插入节点功能更
   *
   * @param {string} [newElement='']
   * @param {any} [item]
   * @returns
   *
   * @memberOf linkedList
   */
  insert(newElement = '', item?) {
    if (!newElement) {
      return;
    }
    let newNode = new Node(newElement);
    let cur = this.find(item);
    newNode.next = cur.next;
    cur.next = newNode;
    this.length++;
    return this;
  }
  findPrevious(item) {
    let currNode = this.head;
    while (currNode.next != null && currNode.next.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }
  // 展示链表元素
  display() {
    let currNode = this.head,
      arr: Array<Object> = [];
    while (currNode.next != null) {
      arr.push(currNode.next.element);
      currNode = currNode.next;
    }
    return arr.join(' ');
  }
  // 链表的长度
  size() {
    return this.length;
  }
  // 查看链表是否为空
  isEmpty() {
    return this.length == 0;
  }
}
export default linkedList;
