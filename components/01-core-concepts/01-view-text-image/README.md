# React Native Core Concepts: View, Text, and Image

## Introduction

In React Native, **`View`**, **`Text`**, and **`Image`** are fundamental
building blocks used to create user interfaces. Understanding these components
is essential for effectively structuring layouts and presenting content in a
mobile app.

---

## 1. View Component

The **`View`** component in React Native is similar to a `div` in web
development (HTML). It is primarily used to group other components, manage
layouts, and create containers.

### Key Points:

- **Purpose**: `View` is used to structure the layout and hold other components
  like `Text`, `Image`, or even nested `View` components.
- **Positioning and Layout**:
  - `View` supports Flexbox, a powerful layout system that allows for flexible
    and adaptive UI design.
  - You can control positioning using Flexbox properties such as
    `flexDirection`, `justifyContent`, and `alignItems`.
- **Styling**: The `View` component accepts style properties that control
  appearance, such as `backgroundColor`, `padding`, `margin`, `border`, etc.
- **Nesting**: You can nest multiple `View` components to create complex
  layouts, each with its own independent styling and structure.

### Common Use Cases:

- Containers for holding other elements.
- Creating layout structures (e.g., headers, footers, content areas).
- Managing the alignment and spacing of child components.

### Important Properties:

- **`flexDirection`**: Defines the primary axis (row/column) along which the
  children are aligned.
- **`justifyContent`**: Aligns children along the main axis (center,
  space-between, etc.).
- **`alignItems`**: Aligns children along the cross-axis (stretch, center,
  flex-end).
- **`padding`/`margin`**: Controls space inside/outside the `View`.

---

## 2. Text Component

The **`Text`** component is used to display textual content in your application.
Unlike HTML where text can be placed anywhere, React Native strictly uses the
`Text` component to render any kind of text.

### Key Points:

- **Purpose**: `Text` is the only component that can display text on the screen.
- **Nesting**: You can nest `Text` components within each other to apply
  different styles to parts of the text.
- **Event Handling**: The `Text` component can handle press events such as
  `onPress`, making it useful for clickable text elements (e.g., links).
- **Performance Considerations**: Text rendering is optimized for performance in
  React Native, but excessive nesting or complex structures can slow things
  down.

### Common Use Cases:

- Displaying labels, titles, or paragraphs.
- Creating clickable text (using `onPress`).
- Formatting sections of text with different styles.

### Important Properties:

- **`fontSize`**: Controls the size of the text.
- **`color`**: Sets the text color.
- **`fontWeight`**: Defines the thickness of the text (e.g., bold, normal).
- **`textAlign`**: Aligns text inside the container (`left`, `right`, `center`).

### Special Notes:

- You **cannot** mix text elements outside of a `Text` component. For example,
  trying to put an image inside text would require wrapping everything in a
  `Text` component or using a layout approach with `View`.

---

## 3. Image Component

The **`Image`** component in React Native is responsible for displaying images
on the screen. Images can come from various sources like local files, remote
URLs, or base64 strings.

### Key Points:

- **Purpose**: `Image` is used to render static and dynamic images.
- **Image Sources**:
  - You can load images from a **local source** (within the project) or from a
    **remote URL** (e.g., an image hosted on a server).
  - React Native also supports base64-encoded images.
- **Sizing and Resizing**: By default, images scale based on their original
  dimensions. You can resize them explicitly using `width` and `height` styles
  or by applying `resizeMode` to control how images fit within their container.
- **Aspect Ratio**: Maintaining the correct aspect ratio is important for
  responsive and non-distorted images.

### Common Use Cases:

- Displaying logos, product images, avatars, or other visuals.
- Rendering icons or graphics in the UI.
- Loading remote images from an API or CDN.

### Important Properties:

- **`source`**: Defines the source of the image (local or remote).
- **`resizeMode`**: Controls how the image fits within the layout (`cover`,
  `contain`, `stretch`, `center`).
- **`style`**: Used to control the appearance (e.g., size, border, shape) of the
  image.

### Types of `source`:

- **Local Source**: Load an image from your local project using
  `require('./path-to-image.png')`.
- **Remote Source**: Load an image from the internet using
  `{ uri: 'https://example.com/image.png' }`.

---

## Best Practices

- **Component Nesting**: Use `View` to group related components (e.g., wrapping
  `Text` and `Image` within a single `View`).
- **Avoid Over-Nesting**: Overuse of `View` or `Text` nesting can hurt
  performance. Keep layouts simple and well-organized.
- **Styling Consistency**: Apply consistent styles to maintain uniformity.
  Consider using global styles or theme providers for larger projects.
- **Responsive Layouts**: Make sure `View`, `Text`, and `Image` components
  adjust well to different screen sizes using Flexbox, `width`, `height`, and
  `resizeMode`.

---

## Summary

- **`View`**: The foundational layout component, used to group and position
  other elements.
- **`Text`**: The only way to display text, with full control over typography.
- **`Image`**: Displays images from local or remote sources, with options for
  resizing and positioning.

By mastering these three components, you'll have a solid understanding of how to
build basic UI structures in React Native. The next step is to experiment with
these components and combine them to create functional and visually appealing
layouts.
