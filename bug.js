```javascript
// myComponent.js
<div className="bg-gray-200 p-4 rounded-lg">
  <h2 className="text-xl font-bold mb-2">My Component</h2>
  <p>This is a component with some content.</p>
</div>
```

This component uses Tailwind CSS classes for styling. However, if you try to use the component inside another component that uses a different theme or configuration, the styles might not be applied correctly due to the Tailwind CSS configuration conflict.