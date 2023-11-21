import {
  Heading,
  Card,
  CardBody,
  Image,
  VStack,
  HStack,
  Text,
  Box,
  SimpleGrid,
  CardHeader,
} from "@chakra-ui/react";
import { data } from "../utils/data";

export const RecipeListPage = () => {
  return (
    <SimpleGrid padding={20} column={4} spacing={7} minChildWidth='200px'>
      {data.hits.map((item) => (
        <Card height={400} bg='white' key={item.recipe.label}>
          <CardHeader p={0}>
            <Image
              height={40}
              width='100%'
              src={item.recipe.image}
              borderTopLeftRadius='md'
              borderTopRightRadius='md'
            />
          </CardHeader>

          <CardBody textAlign='center' justify-content='center'>
            <Text>{item.recipe.mealType.join("/")}</Text>
            <Heading size='md'>{item.recipe.label}</Heading>

            <HStack
              display='flex'
              justifyContent='center'
              spacing={2}
              margin={2}>
              {item.recipe.healthLabels.includes("Vegan") && (
                <Box fontWeight='semibold' fontSize='12px' bg='purple.200'>
                  VEGAN
                </Box>
              )}
              {item.recipe.healthLabels.includes("Vegetarian") && (
                <Box fontWeight='semibold' fontSize='12px' bg='purple.200'>
                  VEGETARIAN
                </Box>
              )}
            </HStack>

            <HStack
              display='flex'
              justifyContent='center'
              spacing={2}
              margin={2}>
              {item.recipe.dietLabels.map((dietLabel) => (
                <Box
                  key={dietLabel}
                  fontWeight='semibold'
                  fontSize='12px'
                  bg='green.200'>
                  {dietLabel.toUpperCase()}
                </Box>
              ))}
            </HStack>

            <HStack display='flex' justifyContent='center' spacing={2}>
              <p>Dish:</p>
              {item.recipe.dishType.map((dishType) => (
                <Box key={dishType} bg='white.200'>
                  {dishType}
                </Box>
              ))}
            </HStack>

            <Box marginBottom='0'>Cautions:</Box>
            <HStack display='flex' justify-content='space-around' spacing={2}>
              {item.recipe.cautions.map((caution) => (
                <Box
                  key={caution}
                  bg='orange.200'
                  fontSize='12px'
                  fontWeight='semibold'
                  margin='10px'>
                  {caution.toUpperCase()}
                </Box>
              ))}
            </HStack>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
};
