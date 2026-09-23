import React from "react";
import { Fragment } from "react/jsx-runtime";

function Component<T extends keyof React.JSX.IntrinsicElements>({ as: Component, ...props }: { as: string } & React.JSX.IntrinsicElements[T]) {
  return (
    <Component { ...props }>
      Lorem ipsum
    </Component>
  )
}

export function Page() {
  return (
    <Fragment>
      <div className="p-4 text-gray-900">
        <Component as="p" className="typography-heading1"/>
        <Component as="p" className="typography-heading2"/>
        <Component as="p" className="typography-heading3"/>
        <Component as="p" className="typography-heading4"/>
        <Component as="p" className="typography-heading5"/>
        <Component as="p" className="typography-heading6"/>
        <Component as="p" className="typography-title1"/>
        <Component as="p" className="typography-title2"/>
        <Component as="p" className="typography-subtitle1"/>
        <Component as="p" className="typography-subtitle2"/>
        <Component as="p" className="typography-body1"/>
        <Component as="p" className="typography-body2"/>
        <Component as="p" className="typography-overline"/>
        <Component as="p" className="typography-caption"/>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 grid grid-cols-2 gap-4 p-4">
          <div className="col-span-1 space-y-4">
            <Component as="button" className="button button-fill button-gray" />
            <Component as="button" className="button button-fill button-gray" disabled />
            <Component as="button" className="button button-line button-gray" />
            <Component as="button" className="button button-line button-gray" disabled />
            <Component as="button" className="button button-text button-gray" />
            <Component as="button" className="button button-text button-gray" disabled />
            <Component as="button" className="button button-fill button-primary" />
            <Component as="button" className="button button-fill button-primary" disabled />
            <Component as="button" className="button button-line button-primary" />
            <Component as="button" className="button button-line button-primary" disabled />
            <Component as="button" className="button button-text button-primary" />
            <Component as="button" className="button button-text button-primary" disabled />
            <Component as="button" className="button button-fill button-secondary" />
            <Component as="button" className="button button-fill button-secondary" disabled />
            <Component as="button" className="button button-line button-secondary" />
            <Component as="button" className="button button-line button-secondary" disabled />
            <Component as="button" className="button button-text button-secondary" />
            <Component as="button" className="button button-text button-secondary" disabled />
          </div>
          <div className="col-span-1 space-y-4">
            <Component as="button" className="button button-small button-fill button-gray" />
            <Component as="button" className="button button-small button-fill button-gray" disabled />
            <Component as="button" className="button button-small button-line button-gray" />
            <Component as="button" className="button button-small button-line button-gray" disabled />
            <Component as="button" className="button button-small button-text button-gray" />
            <Component as="button" className="button button-small button-text button-gray" disabled />
            <Component as="button" className="button button-small button-fill button-primary" />
            <Component as="button" className="button button-small button-fill button-primary" disabled />
            <Component as="button" className="button button-small button-line button-primary" />
            <Component as="button" className="button button-small button-line button-primary" disabled />
            <Component as="button" className="button button-small button-text button-primary" />
            <Component as="button" className="button button-small button-text button-primary" disabled />
            <Component as="button" className="button button-small button-fill button-secondary" />
            <Component as="button" className="button button-small button-fill button-secondary" disabled />
            <Component as="button" className="button button-small button-line button-secondary" />
            <Component as="button" className="button button-small button-line button-secondary" disabled />
            <Component as="button" className="button button-small button-text button-secondary" />
            <Component as="button" className="button button-small button-text button-secondary" disabled />
          </div>
        </div>
        <div className="col-span-1 grid grid-cols-2 gap-4 p-4 bg-black dark">
          <div className="col-span-1 space-y-4">
            <Component as="button" className="button button-fill button-gray" />
            <Component as="button" className="button button-fill button-gray" disabled />
            <Component as="button" className="button button-line button-gray" />
            <Component as="button" className="button button-line button-gray" disabled />
            <Component as="button" className="button button-text button-gray" />
            <Component as="button" className="button button-text button-gray" disabled />
            <Component as="button" className="button button-fill button-primary" />
            <Component as="button" className="button button-fill button-primary" disabled />
            <Component as="button" className="button button-line button-primary" />
            <Component as="button" className="button button-line button-primary" disabled />
            <Component as="button" className="button button-text button-primary" />
            <Component as="button" className="button button-text button-primary" disabled />
            <Component as="button" className="button button-fill button-secondary" />
            <Component as="button" className="button button-fill button-secondary" disabled />
            <Component as="button" className="button button-line button-secondary" />
            <Component as="button" className="button button-line button-secondary" disabled />
            <Component as="button" className="button button-text button-secondary" />
            <Component as="button" className="button button-text button-secondary" disabled />
          </div>
          <div className="col-span-1 space-y-4">
            <Component as="button" className="button button-small button-fill button-gray" />
            <Component as="button" className="button button-small button-fill button-gray" disabled />
            <Component as="button" className="button button-small button-line button-gray" />
            <Component as="button" className="button button-small button-line button-gray" disabled />
            <Component as="button" className="button button-small button-text button-gray" />
            <Component as="button" className="button button-small button-text button-gray" disabled />
            <Component as="button" className="button button-small button-fill button-primary" />
            <Component as="button" className="button button-small button-fill button-primary" disabled />
            <Component as="button" className="button button-small button-line button-primary" />
            <Component as="button" className="button button-small button-line button-primary" disabled />
            <Component as="button" className="button button-small button-text button-primary" />
            <Component as="button" className="button button-small button-text button-primary" disabled />
            <Component as="button" className="button button-small button-fill button-secondary" />
            <Component as="button" className="button button-small button-fill button-secondary" disabled />
            <Component as="button" className="button button-small button-line button-secondary" />
            <Component as="button" className="button button-small button-line button-secondary" disabled />
            <Component as="button" className="button button-small button-text button-secondary" />
            <Component as="button" className="button button-small button-text button-secondary" disabled />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 grid grid-cols-2 gap-4 p-4">
          <div className="col-span-1 space-y-4">
            <Component as="button" className="button button-fill button-rounded button-gray" />
            <Component as="button" className="button button-fill button-rounded button-gray" disabled />
            <Component as="button" className="button button-line button-rounded button-gray" />
            <Component as="button" className="button button-line button-rounded button-gray" disabled />
            <Component as="button" className="button button-text button-rounded button-gray" />
            <Component as="button" className="button button-text button-rounded button-gray" disabled />
            <Component as="button" className="button button-fill button-rounded button-primary" />
            <Component as="button" className="button button-fill button-rounded button-primary" disabled />
            <Component as="button" className="button button-line button-rounded button-primary" />
            <Component as="button" className="button button-line button-rounded button-primary" disabled />
            <Component as="button" className="button button-text button-rounded button-primary" />
            <Component as="button" className="button button-text button-rounded button-primary" disabled />
            <Component as="button" className="button button-fill button-rounded button-secondary" />
            <Component as="button" className="button button-fill button-rounded button-secondary" disabled />
            <Component as="button" className="button button-line button-rounded button-secondary" />
            <Component as="button" className="button button-line button-rounded button-secondary" disabled />
            <Component as="button" className="button button-text button-rounded button-secondary" />
            <Component as="button" className="button button-text button-rounded button-secondary" disabled />
          </div>
          <div className="col-span-1 space-y-4">
            <Component as="button" className="button button-small button-rounded button-fill button-gray" />
            <Component as="button" className="button button-small button-rounded button-fill button-gray" disabled />
            <Component as="button" className="button button-small button-rounded button-line button-gray" />
            <Component as="button" className="button button-small button-rounded button-line button-gray" disabled />
            <Component as="button" className="button button-small button-rounded button-text button-gray" />
            <Component as="button" className="button button-small button-rounded button-text button-gray" disabled />
            <Component as="button" className="button button-small button-rounded button-fill button-primary" />
            <Component as="button" className="button button-small button-rounded button-fill button-primary" disabled />
            <Component as="button" className="button button-small button-rounded button-line button-primary" />
            <Component as="button" className="button button-small button-rounded button-line button-primary" disabled />
            <Component as="button" className="button button-small button-rounded button-text button-primary" />
            <Component as="button" className="button button-small button-rounded button-text button-primary" disabled />
            <Component as="button" className="button button-small button-rounded button-fill button-secondary" />
            <Component as="button" className="button button-small button-rounded button-fill button-secondary" disabled />
            <Component as="button" className="button button-small button-rounded button-line button-secondary" />
            <Component as="button" className="button button-small button-rounded button-line button-secondary" disabled />
            <Component as="button" className="button button-small button-rounded button-text button-secondary" />
            <Component as="button" className="button button-small button-rounded button-text button-secondary" disabled />
          </div>
        </div>
        <div className="col-span-1 grid grid-cols-2 gap-4 p-4 bg-black dark">
          <div className="col-span-1 space-y-4">
            <Component as="button" className="button button-fill button-rounded button-gray" />
            <Component as="button" className="button button-fill button-rounded button-gray" disabled />
            <Component as="button" className="button button-line button-rounded button-gray" />
            <Component as="button" className="button button-line button-rounded button-gray" disabled />
            <Component as="button" className="button button-text button-rounded button-gray" />
            <Component as="button" className="button button-text button-rounded button-gray" disabled />
            <Component as="button" className="button button-fill button-rounded button-primary" />
            <Component as="button" className="button button-fill button-rounded button-primary" disabled />
            <Component as="button" className="button button-line button-rounded button-primary" />
            <Component as="button" className="button button-line button-rounded button-primary" disabled />
            <Component as="button" className="button button-text button-rounded button-primary" />
            <Component as="button" className="button button-text button-rounded button-primary" disabled />
            <Component as="button" className="button button-fill button-rounded button-secondary" />
            <Component as="button" className="button button-fill button-rounded button-secondary" disabled />
            <Component as="button" className="button button-line button-rounded button-secondary" />
            <Component as="button" className="button button-line button-rounded button-secondary" disabled />
            <Component as="button" className="button button-text button-rounded button-secondary" />
            <Component as="button" className="button button-text button-rounded button-secondary" disabled />
          </div>
          <div className="col-span-1 space-y-4">
            <Component as="button" className="button button-small button-rounded button-fill button-gray" />
            <Component as="button" className="button button-small button-rounded button-fill button-gray" disabled />
            <Component as="button" className="button button-small button-rounded button-line button-gray" />
            <Component as="button" className="button button-small button-rounded button-line button-gray" disabled />
            <Component as="button" className="button button-small button-rounded button-text button-gray" />
            <Component as="button" className="button button-small button-rounded button-text button-gray" disabled />
            <Component as="button" className="button button-small button-rounded button-fill button-primary" />
            <Component as="button" className="button button-small button-rounded button-fill button-primary" disabled />
            <Component as="button" className="button button-small button-rounded button-line button-primary" />
            <Component as="button" className="button button-small button-rounded button-line button-primary" disabled />
            <Component as="button" className="button button-small button-rounded button-text button-primary" />
            <Component as="button" className="button button-small button-rounded button-text button-primary" disabled />
            <Component as="button" className="button button-small button-rounded button-fill button-secondary" />
            <Component as="button" className="button button-small button-rounded button-fill button-secondary" disabled />
            <Component as="button" className="button button-small button-rounded button-line button-secondary" />
            <Component as="button" className="button button-small button-rounded button-line button-secondary" disabled />
            <Component as="button" className="button button-small button-rounded button-text button-secondary" />
            <Component as="button" className="button button-small button-rounded button-text button-secondary" disabled />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
