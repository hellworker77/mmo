using Shared.Interfaces;

namespace Shared;

public class Result<T> : IResult<T>
{
    public bool IsSucceeded { get; private init; }
    public T? Data { get; private init; }

    public static Result<T> Success(T? data = default) =>
        new Result<T>
        {
            Data = data,
            IsSucceeded = true
        };

    public static Result<T> Failure(T? data = default) =>
        new Result<T>
        {
            Data = data,
            IsSucceeded = false
        };
}