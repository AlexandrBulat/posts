import React from 'react';
import { Theme } from '../styles';
import styled from 'styled-components/native'
import { MediumText, ExtraSmallText } from '../styles/Base'
import { Posts } from '../types';
import { View, TouchableOpacity } from 'react-native';

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
    margin-left: 10px
   
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
`

const TitleContainer = styled.View`
    justify-content:space-between;
    margin-top: 15;
    margin-horizontal: 15px
    flex-direction:row
`

const CircleContainer = styled.View`
    flex:1
    align-self: center
    flex-direction: row
`

const Circle = styled.View`
  background-color:purple
  width: 10px;
  height: 10px;
  align-self: center
  border-radius: 5px
`

interface Props {
    item: Posts,
    onSelect: (item: Posts) => void
};

class PostItem extends React.Component<Props> {

    render() {
        const { item, onSelect } = this.props;

        const body = item.body.length < 100 ? item.body : item.body.substring(0, 100)
        return (
            <TouchableOpacity onPress={(event: any) => onSelect(item)}>
                <Container>
                    <TitleContainer>
                        <CircleContainer>
                         { item.pinned &&  <Circle />}
                            <PostName numberOfLines={1}>{`${item.title}`}</PostName>
                        </CircleContainer>
                        <PostId>{`ID: ${item.id}`}</PostId>
                    </TitleContainer>
                    <PostBody>{body}</PostBody>
                </Container>
            </TouchableOpacity>
        );
    }
}

export default PostItem