import React from 'react';
import { connect } from 'react-redux'
import { TouchableOpacity, FlatList } from 'react-native';
import {
    reduxForm,
    InjectedFormProps,
    FormErrors,
} from 'redux-form';
import { Theme } from '../styles';
import { ButtonBase, ButtonTextMedium, ScrollContainer, SafeView } from '../styles/Base';
import { Dispatch } from 'redux';
import { State, Posts } from '../types';
import styled from 'styled-components/native'
import { posts, reset } from '../actions/posts';
import { getPosts } from '../reducers';
import PostItem from '../components/PostItem';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

const LogIn = styled(ButtonBase)`
    margin-top: 15px;
`
const LogInText = styled(ButtonTextMedium)`
    color:${Theme.color.white}
`

const List = styled(FlatList).attrs({
    contentContainerStyle: {
        flexGrow: 1,
        marginTop: 16,

    }
})`
`

export interface MainProps {
    submitError: FormErrors<FormData, string>,
    postsList: Posts[],
    getPosts: () => any,
    resetAll: () => any,
    navigation: NavigationScreenProp<NavigationState>,
};

export interface MainForm {

};

class Main extends React.Component<InjectedFormProps<MainForm, MainProps> & MainProps> {

    componentDidMount() {
        const { handleSubmit, getPosts, postsList } = this.props
        if (postsList.length === 0) {
            handleSubmit(getPosts())
        }
    }

    onSelect = (item: Posts) => {
        this.props.navigation.navigate("select_screen", { post: item })
    }

    render() {
        const { postsList } = this.props

        return (
            <SafeView>
                <TouchableOpacity onPress={()=> this.props.resetAll()}>
                    <LogIn>
                        <LogInText>{"RESET"}</LogInText>
                    </LogIn>
                </TouchableOpacity>
                <List
                    data={postsList}
                    keyExtractor={(_item, index) => `${index}`}
                    renderItem={({ item, index }: { item: Posts, index: number }) =>
                        <PostItem
                            onSelect={this.onSelect}
                            item={item}
                        />} />
            </SafeView>
        );
    }
}

const mapStateToProps = (state: State, ownProps: MainProps) => {
    const postsList = getPosts(state).sort((a, b) => {
        if (a.pinned === b.pinned) {
           return 0;
        }
     
        if (a.pinned) {
           return -1;
        }
     
        if (b.pinned) {
           return 1;
        }
     });
    return {
        postsList: postsList || [],
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getPosts: () => dispatch(posts()),
        resetAll:() => dispatch(reset())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(reduxForm<MainForm, MainProps>({
    form: 'Main'
})(Main))