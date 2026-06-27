import { View, Button, Text } from "react-native";
import { useAuth } from "@clerk/expo";
import { useRouter } from "expo-router";

export default function Dashboard() {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.replace("/auth/sign-in");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to IMS Dashboard</Text>

      <Button
        title="Logout"
        onPress={handleLogout}
      />
    </View>
  );
}