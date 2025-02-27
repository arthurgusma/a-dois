import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Text } from "@/components/Text";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Platform, ScrollView, TextInput, View } from "react-native";
import Animated, { FadeInDown, FadeOut } from "react-native-reanimated";

export default function InputScreen() {
  const inputRef = useRef<TextInput>(null);
  const [value, setValue] = useState<string>("");
  const [err, setErr] = useState<string | null>(null);

  function handleOnLabelPress() {
    if (!inputRef.current) {
      return;
    }
    if (inputRef.current.isFocused()) {
      inputRef.current?.blur();
    } else {
      inputRef.current?.focus();
    }
  }

  function onChangeText(text: string) {
    if (err) {
      setErr(null);
    }
    setValue(text);
  }

  function onSubmitEditing() {
    setErr("Write more stuff to remove this error message.");
  }

  return (
    <ScrollView contentContainerClassName="flex-1 justify-center items-center p-6">
      <View className="web:max-w-xs w-full">
        <Label
          className={cn(err && "text-destructive", "pb-2 native:pb-1 pl-0.5")}
          nativeID="inputLabel"
          onPress={handleOnLabelPress}
        >
          Label
        </Label>
        <Input
          ref={inputRef}
          placeholder="Write some stuff..."
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          aria-labelledby="inputLabel"
          aria-errormessage="inputError"
        />
        {err && <ErrorMessage msg={err} />}
        <View className="h-20" />
      </View>
    </ScrollView>
  );
}

function ErrorMessage({ msg }: { msg: string }) {
  if (Platform.OS === "web") {
    return (
      <Text
        className="text-destructive text-sm native:px-1 py-1.5 web:animate-in web:zoom-in-95"
        aria-invalid="true"
        id="inputError"
      >
        {msg}
      </Text>
    );
  }
  return (
    <Animated.Text
      entering={FadeInDown}
      exiting={FadeOut.duration(275)}
      className="text-destructive text-sm native:px-1 py-1.5"
      aria-invalid="true"
      id="inputError"
    >
      {msg}
    </Animated.Text>
  );
}
