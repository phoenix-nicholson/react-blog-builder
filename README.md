# Blog Builder
**Use [this repository](https://github.com/alchemycodelab/react-blog-builder/) as a template for your deliverable**
### Learning Objectives

- Use attributes in parent components to pass data down to child components as props
- Use useState hook to create and update simple (primitive) component state
- Use arrow function properties to define event handlers
- Use function syntax to create presentational components
- Destructure props and state in functional components
- Use JSX to produce & render a React component
- Use {} as "portals" in the render method to do JavaScript inside our HTML.

### Description

The objective of this application is to create a mini "Blog Builder" that contains an editing panel and a preview panel. When the attributes in the editing panel are updated, their new values are reflected in the preview.

You have been provided with `<Home/>` container component, an `<Editor>` presentational component, and a `<Preview>` presentational component. Your job is to add state to the `<Home>` component which will then be passed down to the `<Editor>` and `<Preview>` components.

### Goal

When you initially launch the app, if you try to type anything in the editor inputs, the app will fail because its expecting certain props. Look closely at both the `<Editor>` and the `<Preview>` components. What props do they have in common? How can you define common state between them and pass it down?

_Hint: start with a single prop such as title and try to get it displaying on both the editor panel and the preview. Once that is working, ACP, then continue with each additional input on the editor panel_

### Rubric

| Task                                                                               | Points |
| ---------------------------------------------------------------------------------- | ------ |
| 1 point for each state variable being passed properly to the `<Editor>` component  | 5      |
| 1 point for each state variable being passed properly to the `<Preview>` component | 5      |
