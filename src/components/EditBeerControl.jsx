import React from 'react';
import EditBeerForm from './EditBeerForm';
import PropTypes from "prop-types";

class NewBeerControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: true,
        };
        this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
    }

    handleTroubleshootingConfirmation() {
        this.setState({ formVisibleOnPage: true });
    }

    render() {
        let currentlyVisibleContent = null;
        if (this.state.formVisibleOnPage) {
            currentlyVisibleContent = <EditBeerForm onNewBeerCreation={this.props.onNewBeerCreation} />;
        }
        return (
            <div>
                {currentlyVisibleContent}
            </div>
        );
    }
}

NewBeerControl.propTypes = {
    onNewBeerCreation: PropTypes.func,
};

export default NewBeerControl;