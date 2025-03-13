import React, { useState } from "react";
import { Alert, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import InputField from "../ components/InputField";
export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

type Props = {
  navigation: NavigationProp<AuthStackParamList>;
};

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC<Props> = ({ navigation }) => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<RegisterFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<RegisterFormData> = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    try {
      if (!validateForm()) {
        return;
      }

      setLoading(true);

   
      const response = await fetch("exp://192.168.1.161:8081", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        Alert.alert("Success", "Registration successful!");
        navigation.navigate("Login");
      } else {
        Alert.alert("Error", data.message || "Registration failed");
      }
    } catch (error) {
      Alert.alert("Error", "Network error. Please try again.");
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
   
      <View className="relative w-full py-4">
        <TouchableOpacity
          className="absolute left-4 top-6 z-10"
          onPress={() => navigation.navigate("Welcome")}
        >
          <Text className="text-gray-600 text-base">Go back</Text>
        </TouchableOpacity>
        
        <Text className="text-2xl font-bold text-center mt-12">
          Create Account
        </Text>
      </View>


      <View className="px-6 mt-8">
        <InputField
          label="Name"
          placeholder="Enter your name"
          value={formData.name}
          onChangeText={(value) => setFormData({ ...formData, name: value })}
          error={errors.name}
          className="mb-4"
        />

        <InputField
          label="Email"
          placeholder="Enter your email"
          value={formData.email}
          onChangeText={(value) => setFormData({ ...formData, email: value })}
          error={errors.email}
          keyboardType="email-address"
          autoCapitalize="none"
          className="mb-4"
        />

        <InputField
          label="Password"
          placeholder="Enter your password"
          value={formData.password}
          onChangeText={(value) => setFormData({ ...formData, password: value })}
          error={errors.password}
          secureTextEntry
          className="mb-4"
        />

        <InputField
          label="Confirm Password"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChangeText={(value) =>
            setFormData({ ...formData, confirmPassword: value })
          }
          error={errors.confirmPassword}
          secureTextEntry
          className="mb-6"
        />

       
        <TouchableOpacity
          className={`w-full py-4 rounded-lg bg-blue-500 ${
            loading ? "opacity-70" : ""
          }`}
          onPress={handleRegister}
          disabled={loading}
        >
          <Text className="text-white text-center font-semibold text-lg">
            {loading ? "Creating Account..." : "Create Account"}
          </Text>
        </TouchableOpacity>

     
        <TouchableOpacity
          className="mt-6"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-gray-600 text-center">
            Already have an account?{" "}
            <Text className="text-blue-500 font-semibold">Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;