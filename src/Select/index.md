---
nav:
  title: Components
  path: /components
group:
  title: 基本组件
---

# Select

## 基本使用

```tsx
import React from 'react';
import { Select } from 'rt-ui';
const Option = Select.Option;

const value = 1;
const options = [
  { label: 'op1', value: 'op1' },
  { label: 'op2', value: 'op2' },
  { label: 'op3', value: 'op3' },
];

export default () => {
  return (
    <Select>
      {options.map((item) => (
        <Option value={item.value}>{item.label}</Option>
      ))}
    </Select>
  );
};
```

## 设置宽度

```tsx
import React from 'react';
import { Select } from 'rt-ui';
const Option = Select.Option;

const value = 1;
const options = [
  { label: 'op1', value: 'op1' },
  { label: 'op2', value: 'op2' },
  { label: 'op3', value: 'op3' },
];

export default () => {
  return (
    <Select style={{ width: 500 }}>
      {options.map((item) => (
        <Option value={item.value}>{item.label}</Option>
      ))}
    </Select>
  );
};
```

## disabled

```tsx
import React from 'react';
import { Select } from 'rt-ui';
const Option = Select.Option;

const value = 1;
const options = [
  { label: 'op1', value: 'op1' },
  { label: 'op2', value: 'op2' },
  { label: 'op3', value: 'op3', disabled: true },
];

export default () => {
  return (
    <Select>
      {options.map((item) => (
        <Option value={item.value} disabled={item.disabled}>
          {item.label}
        </Option>
      ))}
    </Select>
  );
};
```

## search

```tsx
import React from 'react';
import { Select } from 'rt-ui';
const Option = Select.Option;

const value = 1;
const options = [
  { label: 'op1', value: 'op1' },
  { label: 'op2', value: 'op2' },
  { label: 'op3', value: 'op3', disabled: true },
];

export default () => {
  return (
    <Select search>
      {options.map((item) => (
        <Option value={item.value} disabled={item.disabled}>
          {item.label}
        </Option>
      ))}
    </Select>
  );
};
```

<API></API>
