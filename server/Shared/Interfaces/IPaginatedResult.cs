namespace Shared.Interfaces;

public interface IPaginatedResult<T>
{
    bool IsSucceeded { get; } 
    List<T> Data { get; }
    int CurrentPage { get; set; }
    int TotalPages { get; set; }
    int TotalCount { get; set; }
    int PageSize { get; set; }
    bool HasPreviousPage => CurrentPage > 1;
    bool HasNextPage => CurrentPage < TotalPages;
}