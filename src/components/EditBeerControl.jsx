import React from 'react';
import EditBeerForm from './EditBeerForm';
import PropTypes from "prop-types";

class EditBeerControl extends React.Component {
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
            currentlyVisibleContent = <EditBeerForm onEditBeerCreation={this.props.onEditBeerCreation} />;
        }
        return (
            <div>
                {currentlyVisibleContent}
            </div>
        );
    }
}

EditBeerControl.propTypes = {
    onEditBeerCreation: PropTypes.func,
};

export default EditBeerControl;