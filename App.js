import React from 'react';
import { ScrollView } from 'react-native';
import ProfileRFC from './ProfileRFC';
import ProfileRCC from './ProfileRCC';
import FormPendaftaran from './FormPendaftaran';
import ColorBox from './ColorBox';

export default function App() {
  return (
    <ScrollView>
      <ProfileRFC />
      <ProfileRCC />
      <FormPendaftaran />
      <ColorBox />
    </ScrollView>
  );
}
