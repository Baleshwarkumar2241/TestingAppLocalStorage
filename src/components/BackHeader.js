import { Image, Pressable, View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackHeader = ({headerName}) => {
    const navigation = useNavigation()
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#8278FC',
                paddingHorizontal: 13,
                paddingVertical: 18,
            }}>
            <Pressable onPress={() => navigation.goBack()}>
                <Image
                    source={require('../assest/left_arrow.png')}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                        alignSelf: 'center',
                        tintColor:'#FFF',
                        marginEnd:20
                    }}
                />
            </Pressable>
            <Text
                style={{
                    fontSize: 23,
                    fontWeight: 600,
                    color: '#FFF',
                }}>
                {headerName}
            </Text>
        
        </View>
    );
};

export default BackHeader
const styles = StyleSheet.create({

})
