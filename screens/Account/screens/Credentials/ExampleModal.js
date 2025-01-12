import { Modal, View, Text, Pressable, StyleSheet, Image } from 'react-native';

export const EXAMPLE_TYPES = {
  CNIC_CARD: 'CNIC_CARD',
  CNIC_IN_HAND: 'CNIC_IN_HAND',
  PROOF_EMPLOYMENT: 'PROOF_EMPLOYMENT'
}

function ExampleImage({ type }) {
  let example = <></>
  switch (type) {
    case EXAMPLE_TYPES.CNIC_CARD:
      example = <View style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 15
      }}>
        <Image
          source={require('@assets/example/info_example_cnic_card_positive.png')}
          contentFit="cover"
          transition={1000}
          style={{
            width: 270,
            height: 170,
          }}
        />
        <Image
          source={require('@assets/example/info_example_cnic_card_negative.png')}
          contentFit="cover"
          transition={1000}
          style={{
            width: 270,
            height: 170,
          }}
        />
      </View>
      break;
    case EXAMPLE_TYPES.CNIC_IN_HAND:
      example = <View style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Image
          source={require('@assets/example/info_example_cnic_hand_held.png')}
          contentFit="cover"
          transition={1000}
          style={{
            width: 270,
            height: 170,
          }}
        />
      </View>
      break;
    case EXAMPLE_TYPES.PROOF_EMPLOYMENT:
      example = <View style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 15
      }}>
        <Image
          source={require('@assets/example/info_example_work_card.png')}
          contentFit="cover"
          transition={1000}
          style={{
            width: 270,
            height: 170,
          }}
        />
        <Image
          source={require('@assets/example/info_example_work_scene.png')}
          contentFit="cover"
          transition={1000}
          style={{
            width: 270,
            height: 170,
          }}
        />
        <Image
          source={require('@assets/example/info_example_business_card.png')}
          contentFit="cover"
          transition={1000}
          style={{
            width: 270,
            height: 170,
          }}
        />
      </View>
      break;
  }
  return (
    <View>
      <Text style={styles.title}>Example</Text>
      {
        example
      }
    </View>
  )

}

export function ExampleModal({ isVisible, onClose, type }) {
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.container} >
        <View style={styles.content}>
          <ExampleImage type={type} />
          <Pressable onPress={() => onClose('')}>
            <Text style={
              styles.closeBtn
            }>I Know</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25292e',
    borderRadius: 4,
    gap: 15
  },
  content: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  closeBtn: {
    width: 250,
    height: 50,
    backgroundColor: '#0825B8',
    color: 'white',
    fontSize: 16,
    lineHeight: 50,
    textAlign: 'center',
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 4
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
  }
});
