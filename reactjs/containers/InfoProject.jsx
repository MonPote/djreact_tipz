import React from 'react'
import MyStatefulEditor from '../components/MyStatefulEditor'

export default class InfoProject extends React.Component {
    render() {
        //         const toolbarConfig = {
        //     // Optionally specify the groups to display (displayed in the order listed).
        //     display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
        //     INLINE_STYLE_BUTTONS: [
        //         {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
        //         {label: 'Italic', style: 'ITALIC'},
        //         {label: 'Underline', style: 'UNDERLINE'}
        //     ],
        //     BLOCK_TYPE_DROPDOWN: [
        //         {label: 'Normal', style: 'unstyled'},
        //         {label: 'Heading Large', style: 'header-one'},
        //         {label: 'Heading Medium', style: 'header-two'},
        //         {label: 'Heading Small', style: 'header-three'}
        //     ],
        //     BLOCK_TYPE_BUTTONS: [
        //         {label: 'UL', style: 'unordered-list-item'},
        //         {label: 'OL', style: 'ordered-list-item'}
        //     ]
        // };
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <span>Informations générales</span>
                </div>

                <div className="panel-body">
                    <div className="form-group">
                        <label>Nom du projet</label>
                        <input className="form-control" onChange={this.props.onChangeProjectName}/>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <MyStatefulEditor onChange={this.props.onChangeProjectDescription}/>
                    </div>
                    <div className="form-group">
                        <label>Auteur</label>
                        <input className="form-control" onChange={this.props.onChangeProjectAuthor}/>
                    </div>
                    <div className="form-group">
                        <label>Contact</label>
                        <input className="form-control" onChange={this.props.onChangeProjectContact}/>
                    </div>
                    <div className="form-group text-right">
                         <button className="btn btn-primary" onClick={this.props.createProject}>Enregistrer les
                            modifications
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}