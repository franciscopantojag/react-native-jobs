import React, { useMemo } from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
import { images } from '../../../../constants';
import { checkImageURL } from '../../../../utils';

import styles from './popularjobcard.style';

const PopularJobCard = ({ item, selectedJob, handlePress }) => {
  const imageSource = useMemo(
    () => ({
      uri: checkImageURL(item?.employer_logo)
        ? item.employer_logo
        : images.defaultCompanyLogoUrl,
    }),
    [item.employer_logo]
  );
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={handlePress}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={imageSource}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
