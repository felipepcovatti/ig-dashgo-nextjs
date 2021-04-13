import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfItems: number;
  itemsPerPage?: number;
  currentPage?: number;
  siblingsCount?: number;
  onPageChange: (page: number) => void;
}

function generateRangeArray(start: number, end: number) {
  if (end < start) return []

  return Array
    .from(
      Array(end - start).keys(),
      key => start + key
    )
}

export function Pagination({
  totalCountOfItems,
  itemsPerPage = 10,
  currentPage = 1,
  siblingsCount = 1,
  onPageChange
}: PaginationProps) {

  const firstPageItemCount = ((currentPage - 1) * 10) + 1;
  const lastPageItemCount = Math.min(currentPage * itemsPerPage, totalCountOfItems);

  const lastPage = Math.ceil(totalCountOfItems / itemsPerPage);

  const previousSiblingPages = generateRangeArray(
    Math.max(currentPage - siblingsCount, 2),
    currentPage
  )

  const nextSiblingPages = generateRangeArray(
    currentPage + 1,
    Math.min(currentPage + siblingsCount + 1, lastPage)
  )

  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>{firstPageItemCount}</strong> - <strong>{lastPageItemCount}</strong> de <strong>{totalCountOfItems}</strong>
      </Box>
      <Stack direction="row" spacing="2">

        {currentPage !== 1 && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > (siblingsCount + 2) && (
              <Text color="gray.300" width="8" textAlign="center">...</Text>
            )}
          </>
        )}

        {previousSiblingPages.map(page => (
          <PaginationItem key={page} onPageChange={onPageChange} number={page} />
        ))}

        <PaginationItem onPageChange={onPageChange} isCurrent number={currentPage} />

        {nextSiblingPages.map(page => (
          <PaginationItem key={page} onPageChange={onPageChange} number={page} />
        ))}

        {currentPage !== lastPage && (
          <>
            {currentPage < (lastPage - (siblingsCount + 1)) && (
              <Text color="gray.300" width="8" textAlign="center">...</Text>
            )}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}

      </Stack>
    </Stack>
  )
}