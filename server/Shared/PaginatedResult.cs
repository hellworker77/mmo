using Shared.Interfaces;

namespace Shared;

public class PaginatedResult<T> : IPaginatedResult<T>
{
    private PaginatedResult(bool isSucceeded)
    {
        Data = new List<T>();
        IsSucceeded = isSucceeded;
    }

    private PaginatedResult(bool isSucceeded,
        List<T> data,
        int count = 0,
        int pageNumber = 1,
        int pageSize = 10)
    {
        Data = data;
        CurrentPage = pageNumber;
        IsSucceeded = isSucceeded;
        PageSize = pageSize;
        TotalPages = (int) Math.Ceiling(count / (double) pageSize);
        TotalCount = count;
    }

    public bool IsSucceeded { get; }
    public List<T> Data { get; }
    public int CurrentPage { get; set; }
    public int TotalPages { get; set; }
    public int TotalCount { get; set; }
    public int PageSize { get; set; }
    
    public static PaginatedResult<T> Success(List<T> data, int count, int pageNumber, int pageSize) =>
        new PaginatedResult<T>(true, data, count, pageNumber, pageSize);

    public new static PaginatedResult<T> Failure() =>
        new PaginatedResult<T>(false);
}