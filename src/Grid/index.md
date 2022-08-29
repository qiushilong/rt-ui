---
nav:
  title: Components
  path: /components
group:
  title: 基本组件
  order: 2
---

# Grid

24 栅格布局

## span

```tsx
import React from 'react';
import { Row, Col } from 'rt-ui';

export default () => {
  return (
    <Row gutter={[5, 0]}>
      <Col span={24} style={{ backgroundColor: '#4285f4' }}>
        col-24
      </Col>
      <Col span={12} style={{ backgroundColor: '#6fa2f7' }}>
        col-12
      </Col>
      <Col span={12} style={{ backgroundColor: '#4285f4' }}>
        col-12
      </Col>
      <Col span={8} style={{ backgroundColor: '#6fa2f7' }}>
        col-8
      </Col>
      <Col span={8} style={{ backgroundColor: '#4285f4' }}>
        col-8
      </Col>
      <Col span={8} style={{ backgroundColor: '#6fa2f7' }}>
        col-8
      </Col>
    </Row>
  );
};
```

## offset

```tsx
import React from 'react';
import { Row, Col } from 'rt-ui';

export default () => {
  return (
    <Row gutter={[5, 0]}>
      <Col span={12} offset={12} style={{ backgroundColor: '#6fa2f7' }}>
        col-12
      </Col>
      <Col span={8} style={{ backgroundColor: '#6fa2f7' }}>
        col-8
      </Col>
      <Col span={8} offset={8} style={{ backgroundColor: '#4285f4' }}>
        col-8
      </Col>
    </Row>
  );
};
```

## gutter

```tsx
import React from 'react';
import { Row, Col } from 'rt-ui';

export default () => {
  return (
    <Row gutter={[5, 20]}>
      <Col span={12} offset={12} style={{ backgroundColor: '#6fa2f7' }}>
        col-12
      </Col>
      <Col span={8} style={{ backgroundColor: '#6fa2f7' }}>
        col-8
      </Col>
      <Col span={8} style={{ backgroundColor: '#4285f4' }}>
        col-8
      </Col>
      <Col span={8} style={{ backgroundColor: '#6fa2f7' }}>
        col-8
      </Col>
    </Row>
  );
};
```

## API

### Row Props

<API src='./Row.tsx' hideTitle></API>

### Col Props

<API src='./Col.tsx' hideTitle></API>
