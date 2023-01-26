import React, { Component } from 'react';

interface State {
  error: Error | null;
}

export class TopErrorBoundary extends Component<React.PropsWithChildren, State> {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error: Error): void {
    console.log('error', error);
    this.setState({ error });
  }

  render(): React.ReactNode {
    const { error } = this.state;
    if (error) {
      return <>
      Upps there is some error :(
      </>
    }
    return this.props.children;
  }
}