import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, Linking, Image } from 'react-native';

import styles from './footer.style';
import { icons } from '../../../constants';

const Footer = ({ url }) => {
  const onApply = useCallback(() => Linking.openURL(url), [url]);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onApply} style={styles.applyBtn}>
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
