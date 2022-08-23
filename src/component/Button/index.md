---
nav:
  title: Components
  path: /components
---

# Button

## type

```tsx
import React from 'react';
import { Button } from 'rt-ui';

export default () => (
  <>
    <Button>默认按钮</Button>
    <Button type="primary">primary按钮</Button>
    <Button type="dashed">dashed按钮</Button>
  </>
);
```

## danger

```tsx
import React from 'react';
import { Button } from 'rt-ui';

export default () => (
  <>
    <Button danger>默认按钮</Button>
    <Button type="primary" danger>
      primary按钮
    </Button>
    <Button type="dashed" danger>
      dashed按钮
    </Button>
  </>
);
```

## disabled

```tsx
import React from 'react';
import { Button } from 'rt-ui';

export default () => (
  <>
    <Button disabled>默认按钮</Button>
    <Button type="primary" disabled>
      primary按钮
    </Button>
    <Button type="dashed" disabled>
      dashed按钮
    </Button>
  </>
);
```

## loading

```tsx
import React, { useState } from 'react';
import { Button } from 'rt-ui';

export default () => {
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(true);
  return (
    <>
      <Button loading={flag}>默认按钮</Button>
      <Button type="primary" loading={flag2}>
        primary按钮
      </Button>
      <Button type="dashed" loading={flag}>
        dashed按钮
      </Button>

      <Button onClick={() => setFlag(!flag)}>start | stop</Button>
    </>
  );
};
```

## disabled

```tsx
import React, { useRef, useEffect } from 'react';
import { Button } from 'rt-ui';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref.current);
  }, [ref]);

  return (
    <>
      <Button ref={ref}>默认按钮</Button>
      <Button type="primary">primary按钮</Button>
      <Button type="dashed">dashed按钮</Button>
    </>
  );
};
```

<API src="./Button.tsx"></API>
