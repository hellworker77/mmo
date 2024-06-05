using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Http;

namespace Application.Validators.Domain;

public static class ValidationHelpers
{
    private static long _maxFileSize = 5 * 1024 * 1024;
    private static string[] _permittedExtensions = {".png", ".jpg", ".jpeg"};
    
    public static bool FileValidate(IFormFile? file)
    {
        if (file == null)
        {
            return false;
        }

        return file.Length > 0 && file.Length < _maxFileSize &&
               _permittedExtensions.Contains(Path.GetExtension(file.FileName).ToLower());
    }
}