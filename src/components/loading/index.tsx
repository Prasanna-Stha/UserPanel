import type { LoadingPropsType } from "@/@types/loading"
import { Spinner, Text, VStack } from "@chakra-ui/react"

const Loading = ({loadingText, size, color}:LoadingPropsType) => {
  return (
    <VStack colorPalette="teal">
      <Spinner color={color} size={size} />
      <Text color={color}>{loadingText}</Text>
    </VStack>
  )
}

export default Loading