/**
 * @class ColoredHeadingOne
 */

import * as React from 'react';

export type Props = {
  text: string,
  color: string
}

export default class ColoredHeadingOne extends React.Component<Props> {
  render() {
    const {
      text,
      color
    } = this.props;

    return (
      <h1 style={{color}}>
        {text}
      </h1>
    )
  }
}
