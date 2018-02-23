import React, {PropTypes} from 'react';

class LoadingDots extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {frame: 1};
    }

    // Invoked after component is mounted. 
    // Initialization that requires DOM nodes should go here, along with setting up subscriptions or network requests.
    componentDidMount() {
        this.interval = setInterval(() => {
            // Note that calling setState here will trigger an extra rendering, but it will happen before the browser updates the screen.
            // eslink-disable-line react/no-did-mount-set-state
            this.setState({ 
                frame: this.state.frame + 1
            });
        }, this.props.interval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let dots = this.state.frame % (this.props.dots + 1);
        let text = '';
        while (dots > 0) {
            text += '.';
            dots--;
        }
        return <span {...this.props}>{text}&nbsp;</span>;
    }
}

LoadingDots.defaultProps = {
    interval: 300, dots: 3
};

LoadingDots.propTypes = {
    interval: PropTypes.number,
    dots: PropTypes.number
};

export default LoadingDots;