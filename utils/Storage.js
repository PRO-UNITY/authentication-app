import AsyncStorage from "@react-native-async-storage/async-storage";

export const GetStringFromStorage = async (key) => {
  const data = await AsyncStorage.getItem(key);
  return data;
};

export const GetObjectFromStorage = async (key) => {
  const res = await AsyncStorage.getItem(key);
  const data = JSON.parse(res);
  return data;
};

export const SetStringToStorage = async (key, value) => {
  await AsyncStorage.setItem(key, value);
};

export const SetObjectToStorage = async (key, value) => {
  const res = JSON.stringify(value);
  await AsyncStorage.setItem(key, res);
};
