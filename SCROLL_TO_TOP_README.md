# Scroll to Top Functionality

This project includes a generic solution for automatically scrolling to the top of the page whenever navigation occurs.

## Implementation

### Custom Hook: `useScrollToTop`

Located in `src/hooks/useScrollToTop.ts`, this hook provides automatic scroll-to-top functionality on route changes.

#### Basic Usage

```typescript
import { useScrollToTop } from './hooks/useScrollToTop';

const MyComponent = () => {
  useScrollToTop(); // Smooth scroll to top on route changes
  
  return <div>My Component</div>;
};
```

#### Advanced Usage with Options

```typescript
// Instant scroll (no animation)
useScrollToTop({ instant: true });

// Custom scroll behavior
useScrollToTop({ behavior: 'auto' });

// Disable smooth scrolling
useScrollToTop({ smooth: false });
```

#### Alternative Hooks

```typescript
// Instant scroll to top
import { useScrollToTopInstant } from './hooks/useScrollToTop';
useScrollToTopInstant();

// Smooth scroll to top
import { useScrollToTopSmooth } from './hooks/useScrollToTop';
useScrollToTopSmooth();
```

## Integration

The hook is automatically integrated into the main App component:

```typescript
// src/App.tsx
const AppContent: React.FC = () => {
  // Scroll to top on route changes
  useScrollToTop();
  
  return (
    <div className="App">
      {/* App content */}
    </div>
  );
};
```

## Features

- **Automatic**: Triggers on every route change
- **Smooth Animation**: Default smooth scrolling behavior
- **Configurable**: Multiple options for different use cases
- **TypeScript Support**: Full type safety
- **Performance**: Efficient implementation using React hooks

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `behavior` | `ScrollBehavior` | `'smooth'` | Scroll behavior ('auto', 'smooth') |
| `smooth` | `boolean` | `true` | Enable/disable smooth scrolling |
| `instant` | `boolean` | `false` | Instant scroll without animation |

## Browser Support

- Modern browsers with `scrollTo` API support
- Graceful fallback for older browsers
- Works with React Router v6
