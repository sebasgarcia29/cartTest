import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  productName: {
    fontSize: 20,
  },
  itemSeparator: {
    borderBottomWidth: 5,
    marginVertical: 5,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  containerIcon: {
    backgroundColor: '#3b5998',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
