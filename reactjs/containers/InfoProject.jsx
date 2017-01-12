import React from 'react'
import MyStatefulEditor from '../components/MyStatefulEditor'

export default class InfoProject extends React.Component {
    render() {
        const toolbarConfig = {
            // Optionally specify the groups to display (displayed in the order listed).
            display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
            INLINE_STYLE_BUTTONS: [
                {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
                {label: 'Italic', style: 'ITALIC'},
                {label: 'Underline', style: 'UNDERLINE'}
            ],
            BLOCK_TYPE_DROPDOWN: [
                {label: 'Normal', style: 'unstyled'},
                {label: 'Heading Large', style: 'header-one'},
                {label: 'Heading Medium', style: 'header-two'},
                {label: 'Heading Small', style: 'header-three'}
            ],
            BLOCK_TYPE_BUTTONS: [
                {label: 'UL', style: 'unordered-list-item'},
                {label: 'OL', style: 'ordered-list-item'}
            ]
        };

        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <span>Informations générales</span>
                </div>

                <div className="panel-body">
                    <div className="col-lg-12">
                        <div className="col-lg-4 text-center">
                            <span>Nom du projet</span>
                        </div>
                        <div className="col-lg-8">
                            <input className="form-control" onChange={this.props.onChangeProjectName}/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="col-lg-4 text-center">
                            <span>Description</span>
                        </div>
                        <div className="col-lg-8">
                            {/*<RichTextEditor toolbarConfig={toolbarConfig}/>*/}
                            <MyStatefulEditor onChange={this.props.onChangeProjectDescription}/>
                        </div>
                        {/*<div className="col-lg-6">*/}
                        {/*<textarea className="form-control" onChange={this.props.onChangeProjectDescription}/>*/}
                        {/*</div>*/}
                    </div>
                    <div className="col-lg-12">
                        <div className="col-lg-4 text-center">
                            <span>Auteur</span>
                        </div>
                        <div className="col-lg-8">
                            <input className="form-control" onChange={this.props.onChangeProjectAuthor}/>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="col-lg-4 text-center">
                            <span>Contact</span>
                        </div>
                        <div className="col-lg-8">
                            <input className="form-control" onChange={this.props.onChangeProjectContact}/>
                        </div>
                    </div>
                    <div className="col-lg-12 text-right">
                        <button className="btn btn-primary" onClick={this.props.createProject}>Enregistrer les
                            modifications
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}