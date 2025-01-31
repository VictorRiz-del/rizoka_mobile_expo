import {
  View,
  Text,
  TextInput,
  KeyboardTypeOptions,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  TextInputProps,
} from "react-native";
import React, { memo, useEffect, useState } from "react";
import BoldText from "./Utils/BoldText";
import MediumText from "./Utils/MediumText";
import CountryList from "country-list-with-dial-code-and-flag";
import { BottomSheet, Icon, ListItem, SearchBar } from "@rneui/themed";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { debounce } from "lodash";
interface InputWrapperProps extends TextInputProps  {
  placeholder: string;
  label: string;
  inputError?: boolean;
  errorMessage?: string;
  value?: any;
  password?: boolean;
};
export default function InputWrapper({
  placeholder,
  label,
  inputError,
  errorMessage,
  onChangeText,
  value,
  keyboardType,
  password,
}: InputWrapperProps) {
  const [listOpen, setListOpen] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [list, setList] = useState(CountryList.getAll());
  const [selectedCountry, setSelectedCountry] = useState(list[164]);
  const [passwordType, setPasswordType] = useState(true);
  const [search, setSearch] = useState("");
  const updateSearch = (search: any) => {
    setSearch(search);
    debounce(() => {
      const filteredCountries = CountryList.findByKeyword(search);
      setList(filteredCountries);
    }, 300)();
  };
  const handleCountrySelect = (country: any) => {
    setSelectedCountry(country);
    setListOpen(false);
    setisLoading(true);
  };
  const toggleList = () => {
    if (!listOpen) {
      setisLoading(true);
    }
    setListOpen(!listOpen);
  };
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, [listOpen]);
  return (
    <View
      className="relative w-full p-3 rounded-lg gap-1"
      style={{ opacity: errorMessage ? 0.7 : 1 }}
    >
      <View className="bg-black/30 backdrop-blur-lg absolute top-0 left-5 z-10">
        <BoldText className="text-white font-bold">{label}</BoldText>
      </View>
      <View
        className={`w-full border ${
          errorMessage ? "border-lightRed" : "border-white"
        } rounded-md`}
      >
        {password ? (
          <View className="flex-row items-center">
            <TextInput
              className="grow text-white text-lg px-3"
              placeholder={placeholder}
              placeholderTextColor={"white"}
              secureTextEntry={passwordType}
              onChangeText={onChangeText}
              value={value}
            />
            {
              <TouchableOpacity
                className="pr-2"
                onPress={() => setPasswordType(!passwordType)}
              >
                <Icon
                  name={passwordType ? "eye-off" : "eye"}
                  type="material-community"
                  color={"white"}
                  size={20}
                />
              </TouchableOpacity>
            }
          </View>
        ) : keyboardType === "phone-pad" ? (
          <View className="w-full flex-row items-center">
            <View className=" p-2 flex-row items-center gap-1">
              <TouchableOpacity onPress={toggleList}>
                <Text className="text-white">{selectedCountry.flag}</Text>
              </TouchableOpacity>
              <Text className="text-white">{selectedCountry.countryCode}</Text>
            </View>
            <TextInput
              className="grow text-white text-lg px-3"
              placeholder={placeholder}
              placeholderTextColor={"white"}
              keyboardType={keyboardType}
              value={value}
              onChangeText={onChangeText}
            />
          </View>
        ) : (
          <TextInput
            className="grow text-white text-lg px-3"
            placeholder={placeholder}
            placeholderTextColor={"white"}
            keyboardType={keyboardType}
              value={value}
              onChangeText={onChangeText}
          />
        )}
      </View>
      <View>
        <MediumText className="text-lightRed">
          {inputError && errorMessage}
        </MediumText>
      </View>
      <BottomSheet isVisible={listOpen} onBackdropPress={toggleList}>
        <View className="bg-black/90 rounded-lg" style={{ height: hp(70) }}>
          <SearchBar
            value={search}
            onChangeText={updateSearch}
            placeholder="Search for a country"
            style={{ backgroundColor: "transparent" }}
            inputStyle={{ color: "white", backgroundColor: "transparent" }}
            containerStyle={{ backgroundColor: "transparent" }}
            inputContainerStyle={{ backgroundColor: "tranparent" }}
          />
          <ScrollView>
            {isLoading ? (
              <ActivityIndicator color={"white"} size={20} />
            ) : (
              <>
                {list.map((country, i) => (
                  <Item
                    key={i}
                    country={country}
                    onPress={() => handleCountrySelect(country)}
                  />
                ))}
              </>
            )}
          </ScrollView>
        </View>
      </BottomSheet>
    </View>
  );
}

const Item = memo(function ListItemWrapper({ country, onPress }: any) {
  return (
    <ListItem
      bottomDivider
      onPress={onPress}
      containerStyle={{ backgroundColor: "transparent" }}
      style={{ backgroundColor: "transparent" }}
    >
      <Text>{country.flag}</Text>
      <ListItem.Content>
        <View className="flex-row items-center gap-1">
          <Text className="text-white">{country.name}</Text>
          <Text className="text-white">{country.countryCode}</Text>
        </View>
      </ListItem.Content>
    </ListItem>
  );
});
