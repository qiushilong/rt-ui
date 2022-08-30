---
nav:
  title: Components
  path: /components
group:
  title: 基本组件
---

# Select

```tsx
import React from 'react';
import { Select } from 'rt-ui';

const value = 1;
const options = [
  { label: 'op1', value: 1 },
  { label: 'op2', value: 2 },
  { label: 'op3', value: 3 },
];

export default () => {
  return <Select options={options}></Select>;
};
```

<API></API>
