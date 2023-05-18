import React, { useMemo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { images } from '../../../../constants';
import { checkImageURL } from '../../../../utils';

import styles from './nearbyjobcard.style';

const NearbyJobCard = ({ job, handleNavigate }) => {
  const imageSource = useMemo(
    () => ({
      uri: checkImageURL(job?.employer_logo)
        ? job.employer_logo
        : images.defaultCompanyLogoUrl,
    }),
    [job.employer_logo]
  );
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={imageSource}
          resizeMode="contain"
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
