import React from 'react';
import { Theme } from '../styles';
import styled from 'styled-components/native'
import { MediumText, ExtraSmallText } from '../styles/Base'
import { Posts } from '../types';
import { View } from 'react-native';

const Container = styled.View`
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 12px;
  margin-bottom: 12px;
  border-radius: 5px;
  border-color: transparent;
  background-color:grey
`

const PostName = styled(MediumText)`
    flex:1
    margin-right: 20px
    align-self:center
`
const PostBody = styled(ExtraSmallText)`
    color:${Theme.color.white50}
    margin-horizontal: 15px
    margin-top: 3px;
    margin-bottom:15
`

const PostId = styled(MediumText)`

    color:${Theme.color.white}
    align-self:center
    margin-top: 3px;
`

const TitleContainer = styled.View`
    justify-content:space-between;
    margin-top: 15;
    margin-horizontal: 15px
    flex-direction:row
`

interface Props {
    item: Posts
};

class PostItem extends React.Component<Props> {

    render() {
        const { item } = this.props;

        const body = item.body.length < 100 ? item.body : item.body.substring(0, 100)
        return (
            <Container>
                <TitleContainer>
                    <PostName numberOfLines={1}>{`${item.title}`}</PostName>
                    <PostId>{`ID: ${item.id}`}</PostId>
                    </TitleContainer>
                    <PostBody>{body}</PostBody>
            </Container>
        );
    }
}

export default PostItem