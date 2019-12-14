import Theme from './Theme';
import React from 'react';
import styled from 'styled-components/native'
import { Platform, SafeAreaView } from 'react-native';


export const SafeView = styled(SafeAreaView)`
    flex: 1;
`

export const ButtonBase = styled.View`
    height: 56px
    margin-left:24px;
    margin-right:24px;
    background-color: pink;
    justify-content: center;
    border-radius: 5px;
    border-color: transparent;
`

export const ButtonTextBase = styled.Text`
    align-self:center;
    font-style: normal;
    color: ${Theme.color.black};
    font-weight: normal;
    font-size: 14px;
    text-align: center;
`

export const ButtonTextMedium = styled.Text`
    align-self:center;
    font-style: normal;
    color:${Theme.color.black}
    font-weight: normal;
    font-size: 14px;
    text-align: center;
`

export const MediumText = styled.Text`
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    color: ${Theme.color.black};
`

export const SmallText = styled.Text`
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    color: ${Theme.color.black};
`
export const ExtraSmallText = styled.Text`
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    color: ${Theme.color.black};
`

export const ScrollContainer = styled.ScrollView.attrs(({ background }: any): any => ({
    keyboardDismissMode: Platform.OS == 'ios' ? "on-drag" : "none",
    bounces: false,
    contentContainerStyle: {
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: "black",
    }
}))`
`