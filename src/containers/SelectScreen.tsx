import React from 'react';
import { connect } from 'react-redux'
import { TouchableOpacity } from 'react-native';
import {
    reduxForm,
    InjectedFormProps,
    FormErrors,
} from 'redux-form';
import { Theme } from '../styles';
import { ButtonBase, ButtonTextMedium, SafeView } from '../styles/Base';
import { Dispatch } from 'redux';
import { State, Posts } from '../types';
import styled from 'styled-components/native'
import { posts, setPinned } from '../actions/posts';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

const Pinned = styled(ButtonBase)`
    margin-top: 15px;
`
const PinnedText = styled(ButtonTextMedium)`
    color:${Theme.color.white}
`

const Unpinned = styled(ButtonBase)`
    margin-top: 15px;
    background-color: red;
`
const UnpinnedText = styled(ButtonTextMedium)`
    color:${Theme.color.white}
`

export interface SelectScreenProps {
    navigation: NavigationScreenProp<NavigationState>,
    post: Posts,
    setPinned: (id: number, pinned: boolean, post: Posts) => any
};

export interface SelectScreenForm {

};

class SelectScreen extends React.Component<InjectedFormProps<SelectScreenForm, SelectScreenProps> & SelectScreenProps> {

    setPinned = (pinned: boolean) => {
        const { post } = this.props
        this.props.setPinned(post.id, pinned, post)
        this.props.navigation.navigate("main")
    }

    render() {
        return (
            <SafeView>
                <TouchableOpacity onPress={() => this.setPinned(true)}>
                    <Pinned>
                        <PinnedText>{"PINNED"}</PinnedText>
                    </Pinned>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setPinned(false)}>
                    <Unpinned>
                        <UnpinnedText>{"UNPINNED"}</UnpinnedText>
                    </Unpinned>
                </TouchableOpacity>
            </SafeView>
        );
    }
}

const mapStateToProps = (state: State, ownProps: SelectScreenProps) => {
    const post = ownProps.navigation.getParam("post")
    return {
        post: post
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setPinned: (id: number, pinned: boolean, post: Posts) => dispatch(setPinned(id, pinned, post)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(reduxForm<SelectScreenProps, SelectScreenProps>({
    form: 'SelectScreen'
})(SelectScreen))