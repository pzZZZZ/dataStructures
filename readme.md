# 数据结构

## 链表 linkedList

### 生成一个空链表

```javascript
let demo = new LinkedList();
```

### 插入元素

```javascript
linkedListDemo.insert('aaaa');
```

### 在某一个元素后插入元素

```javascript
linkedListDemo.insert('bbbb', 'aaaa');
```

### 展示该链表所有元素

```javascript
linkedListDemo.display();
```

### 获得链表长度

```javascript
linkedListDemo.size();
```

### 查找元素

```javascript
linkedListDemo.find(); //如果该元素不存在则会返回最后一个元素
```

### 查找元素索引

```javascript
linkedListDemo.indexOf('aaaa');
```

### 查找指定元素的上一个元素

```javascript
linkedListDemo.indexOf('aaaa');
```

### 删除指定元素

```javascript
linkedListDemo.removeEl('aaaa');
```

## 字典 Dictionary

Demo

```javscript
let dictionary = new Dictionary();
let arr = [{ key: 'mouse', value: '鼠'}, {key: 'ox', value: '牛'}, {key: 'tiger', value: '虎'}, {key: 'rabbit', value: '兔'}, {key: 'dragon', value: '龙'}, {key: 'snake', value: '蛇'}, {key: 'horse', value: '马'}, {key: 'sheep', value: '羊'}, {key: 'monkey', value: '猴'}, {key: 'chicken', value: '鸡'}, {key: 'dog', value: '狗'}, {key: 'pig', value: '猪'}];
    arr.forEach(item => {
        dictionary.set(item.key, item.value);
    });
```

### 获取所有 Key

```javascript
dictionary.keys();
```

### 获取所有 Value

```javascript
dictionary.values();
```

### 查找是否存在元素

```javascript
dictionary.has('hello'); //false
```

### 获取所有对应 value

```javascript
dictionary.get('mouse'); //鼠
```

### 删除某一项

```javascript
dictionary.remove('pig'); //true
```

### 获取字典长度

```javascript
dictionary.size();
```

### 清空字典

```javascript
dictionary.clear();
```
