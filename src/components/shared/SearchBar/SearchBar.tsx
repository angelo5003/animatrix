import { Input, InputGroup, Stack } from "@chakra-ui/react";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { StyledForm } from "@/components/shared/SearchBar/SearchBar.styled";

type SearchBarValues = {
  search: string;
};

const SearchBar: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<SearchBarValues>();

  const onSubmit = (data: SearchBarValues) => {
    console.log(data);
    reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="row" alignItems="center">
        <InputGroup startElement={<Search />}>
          <Input
            placeholder="Search for a manga or anime"
            size="sm"
            {...register("search")}
          />
        </InputGroup>
      </Stack>
    </StyledForm>
  );
};

export default SearchBar;
