import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  cartButton: {
    backgroundColor: '#3b5998',
    borderBottomColor: 'black',
    borderWidth: 0.5,
    padding: 5,
  },
  rightCorners: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  leftCorners: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
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
  quantityFont: {
    fontSize: 25,
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderWidth: 0.5,
    paddingHorizontal: 8,
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
  quantityContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  productImage: {
    marginHorizontal: 10,
    width: 50,
    height: 50,
  },
});
