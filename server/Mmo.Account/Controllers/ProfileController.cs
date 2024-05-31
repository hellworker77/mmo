using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Mmo.Account.Controllers;

[Authorize]
[ApiController]
[Route("api/[controller]")]
public class ProfileController : ControllerBase
{
    [Authorize(Roles = "admin")]
    [HttpGet]
    [Route("id")]
    public async Task<IActionResult> GetById(Guid id)
    {
        return await Task.FromResult(Ok("By id"));
    }
    
    [Authorize(Roles = "admin")]
    [HttpGet]
    [Route("chunk")]
    public async Task<IActionResult> GetChunk(int index, int size)
    {
        return await Task.FromResult(Ok("Chunk"));
    }
    
    [AllowAnonymous]
    [HttpPost]
    [Route("register")]
    public async Task<IActionResult> Register()
    {
        return await Task.FromResult(Ok("Registered"));
    }

    [HttpPut]
    [Route("changePassword")]
    public async Task<IActionResult> ChangePassword()
    {
        return await Task.FromResult(Ok("Password Changed"));
    }

    [HttpPut]
    [Route("changeUsername")]
    public async Task<IActionResult> ChangeUsername()
    {
        return await Task.FromResult(Ok("Username Changed"));
    }
    
    [HttpPut]
    [Route("changeEmail")]
    public async Task<IActionResult> ChangeEmail()
    {
        return await Task.FromResult(Ok("Email Changed"));
    }
    
    [Authorize(Roles = "admin")]
    [HttpPut]
    [Route("changeOtherPassword")]
    public async Task<IActionResult> ChangeOtherPassword(Guid userId)
    {
        return await Task.FromResult(Ok("Other password Changed"));
    }

    [Authorize(Roles = "admin")]
    [HttpPut]
    [Route("changeOtherUsername")]
    public async Task<IActionResult> ChangeOtherUsername(Guid userId)
    {
        return await Task.FromResult(Ok("Other username Changed"));
    }
    
    [Authorize(Roles = "admin")]
    [HttpPut]
    [Route("changeOtherEmail")]
    public async Task<IActionResult> ChangeOtherEmail(Guid userId)
    {
        return await Task.FromResult(Ok("Other email Changed"));
    }

    [Authorize(Roles = "admin")]
    [HttpPut]
    [Route("ban")]
    public async Task<IActionResult> Ban(Guid id, DateTime banTime = default)
    {
        return await Task.FromResult(Ok("Other banned"));
    }
    
    [Authorize(Roles = "admin")]
    [HttpPut]
    [Route("unban")]
    public async Task<IActionResult> Unban(Guid id)
    {
        return await Task.FromResult(Ok("Other unbanned"));
    }

    [Authorize(Roles = "admin")]
    [HttpPut]
    [Route("promote")]
    public async Task<IActionResult> Promote(Guid userId, Guid roleId)
    {
        return await Task.FromResult(Ok("Other promoted"));
    }
}