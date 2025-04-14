/**
 * Helper function to concatenate class names, filtering out falsy values
 * Similar to the clsx or classnames libraries
 */
export function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}
